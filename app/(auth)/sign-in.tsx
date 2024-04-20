import { ScrollView, StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error! Please fill in all the fields");
    }
    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password);
      router.replace("/home");
    } catch (e) {
      Alert.alert("Error", e.message);
    } finally {
      setIsSubmitting(false);
    }
    // createUser();
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh ] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 fonst-psemibold">
            Log into Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardtype="email-address"
            placeholder={undefined}
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder={undefined}
          />
          <CustomButton
            title={"Sign In"}
            handlePress={submit}
            containerStyle={"mt-7"}
            textStyles={undefined}
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pmedium">
              Don't have an account?
            </Text>
            <Link
              className="text-lg font-psemibold text-secondary"
              href="/sign-up"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
