import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback, View, Platform, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo_container}>
            <Image source={require('./src/img/Без_имени_1.png')} style={styles.logo}/>
            <Text style={styles.logo_text}>Mohnatka</Text>
          </View>
        </View>
        <View style={styles.search_info}>
          <View style={styles.search_numb}>
            <TextInput style={styles.input_numb}>232 02 | 1</TextInput>
            <Image source={require('./src/img/Search.png')} style={styles.search_icon} />
          </View>
          <View style={styles.center_straight}>
            <View style={styles.first_straight}></View>
            <View style={styles.second_straight}></View>
            <View style={styles.first_straight}></View>
          </View>
          <View style={styles.info}>
            <View style={styles.info_img}>
              <Image source={require('./src/img/photo_358263.png')} style={styles.img1} />
              <Image source={require('./src/img/288a0a8bafb429a3a16a037869d85dc9.jpg')} style={styles.img2} />
            </View>
            <View style={styles.info_text_area}>
              <Text style={styles.info_text}>ФИО: Петров Николай Олегович</Text>
              <Text style={styles.info_text}>Телефон: +7 777 777 77 77</Text>
              <Text style={styles.info_text}>Место работы: IT Proger</Text>
              <Text style={styles.info_text}>Возраст автомобиля: 1 год</Text>
              <Text style={styles.info_text}>Тип транспорта: легковой</Text>
              <Text style={styles.info_text}>Регион регистрации: Алматы</Text>
              <Text style={styles.info_text}>Гос номер: 389 BMW</Text>
              <View>
                <Text style={styles.info_text_special}>Техосмотр пройден</Text>
                <Text style={styles.info_text}>03-09-2021</Text>
              </View>
              <View style={styles.info_check}>
                <Image source={require('./src/img/Tick Square.png')} style={styles.info_check_img} />
                <Text style={styles.info_text_check}>Количество ДТП: 1</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
          <View style={styles.footer_staright}></View>
          <View style={styles.footer_icon_area}>
            <Image source={require('./src/img/Search_Footer.png')} style={styles.search_icon_footer} />
            <View style={styles.straight_footer} />
            <Image source={require('./src/img/Document.png')} style={styles.document_icon_footer} />
            <View style={styles.straight_footer} />
            <Image source={require('./src/img/Setting.png')} style={styles.settings_icon_footer} />
          </View>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#30D5C8',
  },
  header: {
    width: '100%',
    height: 117,
    backgroundColor: 'white',
    opacity: 0.65,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
  },
  logo_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  logo: {
    width: 74,
    height: 74,
  },
  logo_text: {
    color: '#1D736A',
    width: 101,
    height: 24,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: -20,
    textAlign: 'center',
  },
  search_info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 315,
    marginTop: 173,
  },
  first_straight: {
    width: 89,
    height: 2,
    backgroundColor: 'white',
  },
  second_straight: {
    width: 188,
    height: 2,
    backgroundColor: 'white',
  },
  search_numb: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 272,
    height: 34,
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 14,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 10,
    borderRadius: 15,
  },
  input_numb:{
    width: 200,
    height: 21,
  },
  search_icon: {
    width: 24,
    height: 24,
  },
  center_straight: {
    width: '100%',
    height: 26,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 17,
  },
  alert: {
    width: 272,
    height: 130,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.4,
    borderRadius: 12,
  },
  infocircle_icon_container: {
    width: 29,
    height: 74,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  infocircle_icon: {
    width: 29,
    height: 29,
  },
  alert_text: {
    display: 'flex',
    width: 210,
    height: 99,
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'justify',
    color: '#01403C',
  },
  info: {
    display: 'flex',
    width: '100%',
    height: 236,
    backgroundColor: '#FFFFFF',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: 12,
  },
  info_img: {
    width: '50%',
    height: 211,
    display: 'flex',
    alignItems: 'flex-end',
    opacity: 1,
  },
  img1: {
    width: 121,
    height: 121,
    position: 'absolute',
    marginBottom: 103,
    marginRight: 42,
  },
  img2: {
    width: 121,
    height: 121,
    position: 'absolute',
    marginTop: 89,
    marginLeft: 75,
  },
  info_text_area: {
    width: '50%',
    height: 194,
    display: 'flex',
    justifyContent: 'space-between'
  },
  info_text: {
    width: 160,
    height: 13,
    fontSize: 10,
    lineHeight: 13,
    textAlign: 'right',
  },
  info_text_special: {
    width: 160,
    height: 13,
    fontSize: 10,
    lineHeight: 13,
    textAlign: 'right',
    color: '#00BF36',
  },
  info_check: {
    display: 'flex',
    width: 160,
    height: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  info_check_img: {
    width: 16,
    height: 16,
  },
  info_text_check: {
    width: 90,
    height: 13,
    fontSize: 10,
    lineHeight: 13,
    textAlign: 'right',
  },
  footer: {
    width: '100%',
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 190,
  },
  footer_staright: {
    width: 366,
    height: 2,
    backgroundColor: '#1D736A',
  },
  footer_icon_area: {
    width: 308,
    height: 49,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 11,
  },
  search_icon_footer: {
    width: 43,
    height: 43,
  },
  straight_footer: {
    width: 2,
    height: 30,
    backgroundColor: '#1D736A',
  },
  document_icon_footer: {
    width: 47,
    height: 47,
  },
  settings_icon_footer: {
    width: 47,
    height: 47,
  }
});
