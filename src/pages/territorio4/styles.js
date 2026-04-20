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
      paddingBottom: 150,
    },
    text:{
      fontWeight: 'bold', // Destaque extra
      fontSize:20,
      color:  '#fff',
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
      
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    pressable:{
      
      alignItems: 'center',
      justifyContent: 'center',
      height: '15%',
      backgroundColor: '#58336D',
    },
    texto:{
      marginBottom:20,

      color:  '#fff',
      fontFamily:'sans-serif',
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: 22,
    },
    /// aqui é a imagem
    image:{
      width: 300,
      height: 140,
      borderRadius:20,
      borderWidth: 4, 
      borderColor: '#DD59A4',
    },

    Modal:{
      //parte do modal
      width: '92%',
      height: '92%', //aqui controla o modal
      backgroundColor: '#58336D',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      padding: 20,
      borderRadius: 20,
      borderWidth: 4,
      borderColor: '#DD59A4',
      textAlign: 'left',
    },
    CenterModal:{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    iconeFechar: {
       marginTop:20,

      width: 50, // Largura adequada para um ícone
      height: 50, // Altura adequada para um íconu
      resizeMode: 'contain', //
      alignItems:"center",
      display:"flex",
      justifyContent:"center",
    },
    
    textoM:{
      color: '#fff',
      fontFamily:'sans-serif',
      fontSize:17 ,
      paddingBottom:5,
      textAlign:"center",
     fontWeight: 'light',
    },
  })