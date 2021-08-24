import React, { useEffect, useState } from 'react';
import {widthNavigation, withNavigation} from 'react-navigation';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

import api from '../services/api';

 function SpotList({ tech, navigation }){   //ou  export default function SpotList({props}){  
   const [spots, setSpots] = useState([]);   

    useEffect(() => {
         async function loadSpot(){
           const response = await api.get('/spots', { //ou Response = await api.get('/session?tech=tech', {
               params: {
                     tech
               }

           });   
          //console.log(response.data);
          setSpots(response.data);
         }
       loadSpot();  
    },[]);
 
 function handleNavigate(id){
     navigation.navigate('Book', {id});

 } 




     return(<View style={styles.container}>
              <Text style={styles.title}> Empresas que ultilizam <Text style={styles.bold}> {tech} </Text> </Text>
              <FlatList 
                style={styles.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                       <View style={styles.listItem}> 
                           <Image style={styles.thumbnailt} source={{ uri: item.thumbnail_url}} />  
                           <Text style={styles.company} >{item.company} </Text> 
                           <Text style={styles.price}>{item.price ? `R$${item.price}/dia` : 'GRATUITO'}  </Text>             
                           <TouchableOpacity  onPress={() => handleNavigate(item._id)} style={styles.button}>
                              <Text style={styles.buttonText}> Solicitar reserva  </Text>
                           </TouchableOpacity>
                       </View>


                )}
              />

           </View>
         
        );


}

const styles = StyleSheet.create({
         container: {
            marginTop: 30,
         },
        
         title:{
            fontSize: 20,
            color: '#444',
            paddingHorizontal: 20,
            marginBottom: 15,

        },
        bold: {
             fontWeight: 'bold',

        },
        list: {
            paddingHorizontal: 20,

       },
       listItem: {  
          marginRight: 15,

       },

    thumbnailt: {
         width: 200,
         height: 120,
         resizeMode: 'cover',
         borderRadius: 2,
         
       
    },

    company: {
       fontSize: 24,
       fontWeight: 'bold',
       color: "#333",
       marginTop: 10, 

    },
     price: {
        fontSize: 15,
        color: "#999",
        marginTop: 5,
     },
   button: {
      height: 32,
      backgroundColor: "#f05a5b",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 2,
      marginTop: 15,
    },
 
   buttonText: {

      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 15,
   }

 

});

export default withNavigation(SpotList);