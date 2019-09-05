import React , {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Dimensions, ActivityIndicator,StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { getMechanics, editCards } from '../../redux/action';
import AutoHeightImage from 'react-native-auto-height-image';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

let {height, width} = Dimensions.get('window');

class MechanicsScreen extends Component {

    constructor(props){
        super(props)
        this.getCards();
    }

    static navigationOptions= ({navigation}) => ( {
        headerLeft:(
            <View style={{flexDirection:"row",alignItems:"center",marginLeft:20}}>        
                <Image source={require('../../img/titleLogo.png')} style={{width:40,height:40}}/>
                <Text style={{color:"white",fontSize:17,fontWeight:"bold",marginLeft:10}}>HearthStone</Text>
            </View>
        ),
        headerRight:(
            <TouchableOpacity style={{marginRight:20}} onPress={()=> navigation.navigate("Search")}>
                <Ionicons name="ios-search" size={32} color="white" />
            </TouchableOpacity>
                
        ),
        headerTintColor: "black", 
        headerStyle: {
            backgroundColor: "#286f8f",
        } 
    });

    render(){
    return (
        <View style={styles.container}>
            <StatusBar  backgroundColor={"#286f8f"} barStyle="light-content" />
            <AutoHeightImage width={width-40} source={require("../../img/mechanicsImg.jpg")} style={{marginTop:10,borderRadius:10}}/>
            {this.props.mechanics.length >0 ? 
            <FlatList
                ref={(list) => this.myFlatList = list} 
                style={{marginTop:10}}          
                data={this.props.mechanics}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item}
                renderItem={({item, index})=>(                
                    <TouchableOpacity style={{width:100+"%"}} onPress={()=> this.props.navigation.navigate("Cards",{cardName:item})}>
                        <LinearGradient 
                            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                            locations={[0,0.9]}
                            colors={['#8ba8a6','#286f8f']} 
                            style={styles.MechanicButton}>
                            <Text style={styles.MechanicText}>{item}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                )}
                removeClippedSubviews={true}  
                extraData={this.props.mechanics}   
                />
            :
            <ActivityIndicator size="large" color="#8ba8a6" style={{marginTop:50}} />
            }   
        </View>
    );
    }  


  getCards = () =>{
    const mechanicList = [];
    const cardList = {};
    const {getMechanics,editCards} = this.props;
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",{
      method: 'GET',
          headers :{
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
	        "x-rapidapi-key": "4c63dbcdf5mshf8fff212a01d1cdp1cb1aejsnc77fbc36aa8e" 
          },
    })
    .then((response) => response.json())
    .then((res)=> {
        res.Basic.forEach(element => {
            if(element.mechanics != undefined)
            {
                element.mechanics.forEach(mechanic => {
                    if(mechanicList.indexOf(mechanic.name) === -1)
                    {
                        mechanicList.push(mechanic.name);
                        cardList[mechanic.name]=[];
                        cardList[mechanic.name].push(element)

                    }
                    else{
                        cardList[mechanic.name].push(element)
                    } 
                });                
            }                
        });        
        getMechanics(mechanicList.sort());
        editCards(cardList);
    }).catch((error) => {
        console.log(error);
    })
    .done();
  }

}

const mapStateToProps = (state) => {
    const { mechanics } = state
    return { mechanics }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20,
  },
  MechanicButton:{
    width:100+"%",
    padding:20,
    borderRadius:10,
    marginTop:5,
  },
  MechanicText:{
      fontSize:14,
      color:"white",
      fontWeight:"bold"
  }
});

export default connect(mapStateToProps,{getMechanics,editCards})(MechanicsScreen);
