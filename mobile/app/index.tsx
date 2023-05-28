import React from "react";
import { useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import SecureStore from "expo-secure-store";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useEffect } from "react";

import { api } from "../src/lib/api";
import blurBg from "../src/assets/bg-blur.png";
import NLWLogo from "../src/assets/logo.svg";

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/c64d598a45ec636782c3",
};

export default function App() {
  const router = useRouter();

  const [request, response, signInWithGithub] = useAuthRequest(
    {
      clientId: "c64d598a45ec636782c3",
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "nlwspacetime",
      }),
    },
    discovery
  );

  async function handleGithubSignIn(code: string) {
    const response = await api.post("/register", {
      code,
    });

    const { token } = response.data;

    await SecureStore.setItemAsync("token", token);
  }

  useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      const { code } = response.params;
      handleGithubSignIn(code);
    }
  }, [response]);

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <ImageBackground
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: "absolute", left: "-100%" }}
      source={blurBg}
    >
      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
          onPress={() => signInWithGithub()}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="leading-rexaled text-center font-body text-sm text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
    </ImageBackground>
  );
}
