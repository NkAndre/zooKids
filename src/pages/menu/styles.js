import {StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#72CA52',
    justifyContent: 'space-between',
    
    paddingBottom:75,
  },

  headView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    backgroundColor:  '#186A22',
    position: 'absolute', 
  },
    headTexto:{
     color: '#72CA52',
     fontFamily:'sans-serif',
     fontSize:25,
      position:'absolute',
      left:0,
      right:0,
      textAlign:'center',
      zIndex:-1,
      fontWeight:'bold',
      
    },

  view:{   
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // lucas aqui é espaçamento vertical entre as linhas do btn
    marginVertical:5,
    //height:'auto'
  },
  pressable:{
    //justifyContent: 'space-around',
    alignItems: 'center',
    //width:100,
    height:'5%',
    marginHorizontal:10,
  },
  texto:{
    color: '#186A22',
    
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize:18,
    paddingTop:8
  },
  image:{
    width: 140,
    height: 140,
    borderRadius:20,
    borderWidth: 4,
    borderColor: '#186A22',
  },
  icone:{
    width: 40,
    height: 40,
  },
  
  /* MODAL */
modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.6)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContent: {
  backgroundColor: '#fff',
  width: 290,
  borderRadius: 12,
  paddingVertical: 20,
  paddingHorizontal: 10,
  elevation: 10,
},

modalItem: {
  fontSize: 18,
  paddingVertical: 12,
  textAlign: 'center',
  color: '#186A22',
  fontWeight: 'bold',
},

})