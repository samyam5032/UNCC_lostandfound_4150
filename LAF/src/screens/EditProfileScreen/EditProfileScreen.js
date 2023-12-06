import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { COLORS, FONTS } from "../../../constants/Theme";
import { MaterialIcons } from "@expo/vector-icons";
import Profile from '../../../assets/images/Claudia.jpg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";

const EditProfile = ({ navigation }) => {

  const [form, setForm] = useState({
    name: "JohnDoe",
    email: "JoneDoe@gmail.com",
    password: "randompassword",
  });


  const [password, setPassword] = useState("randompassword");
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    symbol: false,
  });

  const validatePassword = (password) => {
    const hasLength = password.length >= 12;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordRequirements({
      length: hasLength,
      lowercase: hasLowercase,
      uppercase: hasUppercase,
      number: hasNumber,
      symbol: hasSymbol,
    });

    return (
      hasLength && hasLowercase && hasUppercase && hasNumber && hasSymbol
    );
  };

  const [selectedImage, setSelectedImage] = useState(Profile);


  const [country, setCountry] = useState("UnitedStates");

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("01/01/1990");
  const [startedDate, setStartedDate] = useState("11/12/2023");

  const handleChangeStartDate = (propDate) => {
    setStartedDate(propDate);
  };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  function renderDatePicker() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={openStartDatePicker}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              padding: 35,
              width: "90%",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={startedDate}
              onDateChanged={handleChangeStartDate}
              onSelectedChange={(date) => setSelectedStartDate(date)}
              options={{
                backgroundColor: COLORS.primary,
                textHeaderColor: COLORS.accent,
                textDefaultColor: COLORS.white,
                selectedTextColor: COLORS.white,
                mainColor: COLORS.accent,
                textSecondaryColor: COLORS.white,
                borderColor: "rgba(122,146,165,0.1)",
              }}
            />

            <TouchableOpacity onPress={handleOnPressStartDate}>
              <Text style={{ ...FONTS.body3, color: COLORS.white }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 22,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Setting')}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>

        <Text style={{ ...FONTS.h3 }}>Edit Profile</Text>
      </View>

      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginVertical: 22,
          }}
        >
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={{ uri: selectedImage }}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: COLORS.primary,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}
            >
              <MaterialIcons
                name="photo-camera"
                size={32}
                color={COLORS.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView>
          <View>
            <View
              style={{
                flexDirection: "column",
                marginBottom: 6,
              }}
            >
              <Text style={{ ...FONTS.h4 }}>Name</Text>
              <View
                style={{
                  height: 44,
                  width: "100%",
                  borderColor: COLORS.secondaryGray,
                  borderWidth: 1,
                  borderRadius: 4,
                  marginVertical: 6,
                  justifyContent: "center",
                  paddingLeft: 8,
                }}
              >
                <TextInput
                  value={form.name}
                  onChangeText={(value) => setForm({ ...form, name: value })}
                  editable={true}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "column",
                marginBottom: 6,
              }}
            >
              <Text style={{ ...FONTS.h4 }}>Email</Text>
              <View
                style={{
                  height: 44,
                  width: "100%",
                  borderColor: COLORS.secondaryGray,
                  borderWidth: 1,
                  borderRadius: 4,
                  marginVertical: 6,
                  justifyContent: "center",
                  paddingLeft: 8,
                }}
              >
                <TextInput
                  value={form.email}
                  onChangeText={(value) => setForm({ ...form, email: value })}
                  editable={true}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "column",
                marginBottom: 6,
              }}
            >
              <Text style={styles.inputLabel}>Enter your password</Text>


              <TextInput
                autoCorrect={false}
                onChangeText={password => {
                  setForm({ ...form, password });
                  validatePassword(password);
                }}
                placeholder="********"
                placeholderTextColor="#878E9A"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>


            <View style={styles.inputValidation}>


              {/* //For 8 characters */}
              <View
                style={[
                  styles.inputValidationRow,
                  passwordRequirements.length
                    ? styles.inputValidationRowValid
                    : styles.inputValidationRowInvalid,
                ]}>
                <FeatherIcon
                  color={
                    passwordRequirements.length
                      ? COLORS.primary
                      : COLORS.error
                  }
                  name={
                    passwordRequirements.length
                      ? 'check-circle'
                      : 'alert-circle'
                  }
                  size={14}
                />

                <Text
                  style={[
                    styles.inputValidationRowText,
                    passwordRequirements.length
                      ? styles.inputValidationRowValidText
                      : styles.inputValidationRowInvalidText,
                  ]}>
                  Minimum of 8 characters
                </Text>
              </View>




              {/* For 1 lower Case */}





              <View
                style={[
                  styles.inputValidationRow,
                  passwordRequirements.lowercase
                    ? styles.inputValidationRowValid
                    : styles.inputValidationRowInvalid,
                ]}>
                <FeatherIcon
                  color={
                    passwordRequirements.lowercase
                      ? COLORS.primary
                      : COLORS.error
                  }
                  name={
                    passwordRequirements.lowercase
                      ? 'check-circle'
                      : 'alert-circle'
                  }
                  size={14}
                />
                <Text
                  style={[
                    styles.inputValidationRowText,
                    passwordRequirements.lowercase
                      ? styles.inputValidationRowValidText
                      : styles.inputValidationRowInvalidText,
                  ]}>
                  At least 1 lower case (a-z)
                </Text>
              </View>


              {/* For 1 upper case */}



              <View
                style={[
                  styles.inputValidationRow,
                  passwordRequirements.uppercase
                    ? styles.inputValidationRowValid
                    : styles.inputValidationRowInvalid,
                ]}>
                <FeatherIcon
                  color={
                    passwordRequirements.uppercase
                      ? COLORS.primary
                      : COLORS.error
                  }
                  name={
                    passwordRequirements.uppercase
                      ? 'check-circle'
                      : 'alert-circle'
                  }
                  size={14}
                />
                <Text
                  style={[
                    styles.inputValidationRowText,
                    passwordRequirements.uppercase
                      ? styles.inputValidationRowValidText
                      : styles.inputValidationRowInvalidText,
                  ]}>
                  At least 1 upper case (A-Z)
                </Text>
              </View>




              {/* For 1 number */}

              <View
                style={[
                  styles.inputValidationRow,
                  passwordRequirements.number
                    ? styles.inputValidationRowValid
                    : styles.inputValidationRowInvalid,
                ]}>
                <FeatherIcon
                  color={
                    passwordRequirements.number
                      ? COLORS.primary
                      : COLORS.error
                  }
                  name={
                    passwordRequirements.number
                      ? 'check-circle'
                      : 'alert-circle'
                  }
                  size={14}
                />
                <Text
                  style={[
                    styles.inputValidationRowText,
                    passwordRequirements.number
                      ? styles.inputValidationRowValidText
                      : styles.inputValidationRowInvalidText,
                  ]}>
                  At least 1 number (0-9)
                </Text>
              </View>
              {/* For 1 symbol */}



              <View
                style={[
                  styles.inputValidationRow,
                  passwordRequirements.symbol
                    ? styles.inputValidationRowValid
                    : styles.inputValidationRowInvalid,
                ]}>
                <FeatherIcon
                  color={
                    passwordRequirements.symbol
                      ? COLORS.primary
                      : COLORS.error
                  }
                  name={
                    passwordRequirements.symbol
                      ? 'check-circle'
                      : 'alert-circle'
                  }
                  size={14}
                />
                <Text
                  style={[
                    styles.inputValidationRowText,
                    passwordRequirements.symbol
                      ? styles.inputValidationRowValidText
                      : styles.inputValidationRowInvalidText,
                  ]}>
                  At least 1 symbol (%&,!#)
                </Text>
              </View>
            </View>


          </View>
          <View style={styles.input}>
             <Text style={styles.inputLabel}>Confirm your password</Text>


             <TextInput
               autoCorrect={false}
               onChangeText={confirmPassword =>
                 setForm({ ...form, confirmPassword })
               }
               placeholder="********"
               placeholderTextColor="#878E9A"
               style={styles.inputControl}
               secureTextEntry={true}
               value={form.confirmPassword}
             />
           </View>

          


          

          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              height: 44,
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
              }}
            >
              Save Change
            </Text>
          </TouchableOpacity>

          {renderDatePicker()}
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputControl: {
    height: 44,
    width: "100%",
    borderColor: COLORS.secondaryGray,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
  },
  inputValidation: {
    marginBottom: 12,
  },
  inputValidationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 6,
  },
  inputValidationRowInvalid: {
    opacity: 0.35,
  },
  inputValidationRowText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#292b32',
    marginLeft: 5,
  },
});

export default EditProfile;