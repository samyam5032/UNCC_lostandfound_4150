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


    
    const [selectedImage, setSelectedImage] = useState(Profile);
    const [name, setName] = useState("JohnDoe");
    const [email, setEmail] = useState("JoneDoe@gmail.com");
    const [password, setPassword] = useState("randompassword");
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
                  value={name}
                  onChangeText={(value) => setName(value)}
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
                  value={email}
                  onChangeText={(value) => setEmail(value)}
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
              <Text style={{ ...FONTS.h4 }}>Password</Text>
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
                   autoCorrect={false}
                   onChangeText={(value) => setPassword(value)}
                   placeholder="********"
                   placeholderTextColor="#878E9A"
                   style={styles.inputControl}
                   secureTextEntry={true}
                   value={password}
                />
              </View>
              <View style={styles.inputValidation}>
              <View style={styles.inputValidationRow}>
                <FeatherIcon color="#292B32" name="check-circle" size={14} />

                <Text style={styles.inputValidationRowText}>
                  Minimum of 12 characters
                </Text>
              </View>
              <View style={styles.inputValidationRow}>
                <FeatherIcon color="#292B32" name="check-circle" size={14} />

                <Text style={styles.inputValidationRowText}>
                  At least 1 lower case (a-z)
                </Text>
              </View>

              <View
                style={[
                  styles.inputValidationRow,
                  styles.inputValidationRowInvalid,
                ]}>
                <FeatherIcon color="#292B32" name="check-circle" size={14} />

                <Text style={styles.inputValidationRowText}>
                  At least 1 upper case (A-Z)
                </Text>
              </View>
              <View style={styles.inputValidationRow}>
                <FeatherIcon color="#292B32" name="check-circle" size={14} />

                <Text style={styles.inputValidationRowText}>
                  At least 1 number (0-9)
                </Text>
              </View>
              <View
                style={[
                  styles.inputValidationRow,
                  styles.inputValidationRowInvalid,
                ]}>
                <FeatherIcon color="#292B32" name="check-circle" size={14} />

                <Text style={styles.inputValidationRowText}>
                  At least 1 symbol (%&,!#)
                </Text>
              </View>
            </View>


            </View>
  
            <View
              style={{
                flexDirection: "column",
                marginBottom: 6,
              }}
            >
              <Text style={{ ...FONTS.h4 }}>Date or Birth</Text>
              <TouchableOpacity
                onPress={handleOnPressStartDate}
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
                <Text>{selectedStartDate}</Text>
              </TouchableOpacity>
            </View>
          </View>
  
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>Country</Text>
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
                value={country}
                onChangeText={(value) => setCountry(value)}
                editable={true}
              />
            </View>
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