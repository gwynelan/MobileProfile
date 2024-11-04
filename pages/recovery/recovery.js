import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have this library installed

const Recovery = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  const handleMethodSelection = (method) => {
    setSelectedMethod(method);
  };

  const handleSendCode = () => {
    console.log('Sending verification code via:', selectedMethod);
    setCurrentStep(2); // Move to the verification code step
  };

  const handleVerifyCode = () => {
    console.log('Verification code entered:', verificationCode);
    setCurrentStep(3); // Move to the reset password step
  };

  const handleResetPassword = () => {
    console.log('New password:', newPassword);
    console.log('Confirm password:', confirmPassword);
    // Add logic to finalize password reset
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1); // Move back to the previous step
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/recovery.jpg')} style={styles.image} />

      {currentStep === 1 && (
        <>
          <Text style={styles.title}>Forgot Your Password?</Text>
          <Text style={styles.description}>
            Choose from the next two contact methods to send you an OTP code to restore your password.
          </Text>

          <TouchableOpacity
            style={[styles.methodButton, selectedMethod === 'mobile' && styles.selectedMethod]}
            onPress={() => handleMethodSelection('mobile')}
          >
            <Text style={styles.methodButtonText}>Via Mobile Number</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.methodButton, selectedMethod === 'email' && styles.selectedMethod]}
            onPress={() => handleMethodSelection('email')}
          >
            <Text style={styles.methodButtonText}>Via Email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.sendCodeButton} onPress={handleSendCode}>
            <Text style={styles.sendCodeButtonText}>Send Verification Code</Text>
          </TouchableOpacity>
        </>
      )}

      {currentStep === 2 && (
        <>
          <Text style={styles.title}>Enter Verification Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the code"
            keyboardType="numeric"
            onChangeText={setVerificationCode}
            value={verificationCode}
          />
          <TouchableOpacity style={styles.sendCodeButton} onPress={handleVerifyCode}>
            <Text style={styles.sendCodeButtonText}>Verify Code</Text>
          </TouchableOpacity>
        </>
      )}

      {currentStep === 3 && (
        <>
          <Text style={styles.title}>Reset Your Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your new password"
              secureTextEntry={!passwordVisible}
              onChangeText={setNewPassword}
              value={newPassword}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
              <Icon name={passwordVisible ? "visibility" : "visibility-off"} size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm your new password"
              secureTextEntry={!passwordVisible}
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
              <Icon name={passwordVisible ? "visibility" : "visibility-off"} size={24} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sendCodeButton} onPress={handleResetPassword}>
            <Text style={styles.sendCodeButtonText}>Reset Password</Text>
          </TouchableOpacity>
        </>
      )}

      {currentStep > 1 && ( // Show back button only if not on the first step
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 270,
    height: 250,
    marginBottom: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  methodButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedMethod: {
    backgroundColor: '#007bff',
  },
  methodButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  sendCodeButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
  },
  sendCodeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    textAlign: 'center',
  },
  passwordContainer: {
    position: 'relative', // Allows absolute positioning of the icon
    width: '80%',
    marginBottom: 15,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10, // Adjust top positioning to align with input
  },
  backButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 20, // Ensure some space above the button
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Recovery;
