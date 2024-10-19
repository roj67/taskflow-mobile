// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { Image, View } from 'react-native';
import home from '../../assets/icons/home.png';
import homeSelected from '../../assets/icons/home-selected.png';
import add from '../../assets/icons/add.png';
import addSelected from '../../assets/icons/add-selected.png';
import calender from '../../assets/icons/calendar.png';
import calenderSelected from '../../assets/icons/calendar-selected.png';
import folder from '../../assets/icons/folder.png';
import folderSelected from '../../assets/icons/folder-selected.png';
import user from '../../assets/icons/user.png';
import userSelected from '../../assets/icons/user-selected.png';
import React from 'react';
import { Colors } from '@/constants/Colors';

const TabBarIcon : React.FC<{icon: string, focused: boolean}> = ({ icon, focused }) => {
  let imgSource;
  switch(icon){
    case 'home':
      imgSource = home;
      break;
    case 'home-selected':
      imgSource = homeSelected;
      break;
    case 'add':
      imgSource = add;
      break;
    case 'add-selected':
      imgSource = addSelected;
      break;
    case 'calender':
      imgSource = calender;
      break;
    case 'calender-selected':
      imgSource = calenderSelected;
      break;
    case 'folder':
      imgSource = folder;
      break;
    case 'folder-selected':
      imgSource = folderSelected;
      break;
    case 'user':
      imgSource = user;
      break;
    case 'user-selected':
      imgSource = userSelected;
      break;
    default:
      imgSource = homeSelected;
  }
  return (
    <View style={focused ? {backgroundColor: Colors.lightGrey, height: 50, width: 60, alignItems: 'center', justifyContent:'center', borderRadius: 50} : {}}>
      <Image source={imgSource} style={{width: 25, height: 25}}/>
    </View>
  )
}

export default TabBarIcon;
