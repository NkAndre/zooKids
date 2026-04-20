import {StyleSheet } from "react-native";
import { ScrollView } from "react-native-web";

export default StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

scrollView:{
   width: '100%',
},

text:{
  fontWeight: 'bold', // Destaque extra
  fontSize:20,
  color: '#fff',
  marginBottom:6,
},

textDesc:{
  fontSize:16,
  color:  '#fff',
  fontWeight:'light',
},

icon1:{
  height: 120,
  width:100,
  borderRadius:10,
  marginTop:8,
  resizeMode: 'contain',
},

 dieta:{
  fontSize:18,
  fontWeight: 'light', // Destaque
  color:  '#fff',
  marginTop:0,
  marginBottom:2,

},
  
view:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
  pressable:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '17.8%',
    backgroundColor: '#F9A41E',
  },
  texto:{
    color:  '#fff',
    fontFamily:'sans-serif',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22,
  },
  image:{
    width: 300,
    height: 140,
    borderRadius:20,
    borderWidth: 4,
    borderColor: '#5691BF',
  },

  Modal:{
    width: '90%',
    height: '90%',
    backgroundColor: '#F9A41E',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#5691BF',
    textAlign: 'left',
  },
  CenterModal:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textoM:{
    color: '#fff',
    fontFamily:'sans-serif',
    fontSize:17 ,
    paddingBottom:5,
    textAlign:"center",
    fontWeight: 'light',
  },

  iconeFechar: {
    marginTop:13,
    width: 50, // Largura icone
    height: 50, // altura icone
    resizeMode: 'contain', //
    alignItems:"center",
    display:"flex",
    justifyContent:"center",
  },
})