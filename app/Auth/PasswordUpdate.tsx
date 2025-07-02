import { TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/Button';
import FormWrapper from '@/components/FormWrapper';
import SignupWrapper from '@/components/SignupWrapper';

export default function PasswordUpdate() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = () => {
    if (!password || !confirmPassword) return alert('Please fill in both fields.');
    if (password !== confirmPassword) return alert('Passwords do not match.');

    router.push('/Signup/Address');
  };

  return (
    <SignupWrapper>
      <FormWrapper
        title="Set New Password"
        description="Create a secure password for your account."
      >
        <View className="gap-4">

          {/* Password Input */}
          <View className="relative">
            <TextInput
              value={password}
              onChangeText={setPassword}
              className="border border-[#CECECE] bg-white py-4 px-4 rounded-md pr-12"
              placeholder="Password"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4"
            >
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password Input */}
          <View className="relative">
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              className="border border-[#CECECE] bg-white py-4 px-4 rounded-md pr-12"
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-4"
            >
              <Ionicons
                name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

        </View>
      </FormWrapper>

      <Button text="Continue" onpress={handleNext} />
    </SignupWrapper>
  );
}
