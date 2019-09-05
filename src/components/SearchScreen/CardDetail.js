import React , {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Dimensions, ActivityIndicator, TextInput } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import LinearGradient from 'react-native-linear-gradient';
import CardFlip from 'react-native-card-flip';

let {height, width} = Dimensions.get('window');

class CardDetail extends Component {

    constructor(props){
        super(props)
        this.state={cardHeight:10,cardDetail:[]}
        this.state.cardDetail = this.props.navigation.state.params.cardDetail;
    }

    static navigationOptions= ({navigation}) => ( {
        headerTitle:(
            <View style={{flexDirection:"row",alignItems:"center",marginLeft:5}}>        
                <Image source={require('../../img/titleLogo.png')} style={{width:40,height:40}}/>
                <Text style={{color:"white",fontSize:17,fontWeight:"bold",marginLeft:10}}>{navigation.state.params.cardDetail.name}</Text>
            </View>
        ),
        headerTintColor: "black", 
        headerStyle: {
            backgroundColor: "#286f8f",
        }
    });
    render(){
    return (
        <View style={styles.container}>
            <CardFlip style={{width:100+"%",height:this.state.cardHeight}} ref={(card) => this.card = card} >
                <TouchableOpacity style={{width:100+"%"}} onPress={() =>  this.card.flip()} >
                    <AutoHeightImage width={width-40} source={{uri:this.state.cardDetail .img}} onLayout={(event) => { this.setState({cardHeight:event.nativeEvent.layout.height})}} />
                </TouchableOpacity>
                <TouchableOpacity style={{width:100+"%",height:this.state.cardHeight-50,alignContent:"center",marginTop:40}} onPress={() =>   this.card.flip()} >
                    <LinearGradient 
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    locations={[0,0.9]}
                    colors={['#d26338','#ee9b41']} 
                    style={{flexDirection:"column",padding:10,borderRadius:10,width:100+"%",height:100+"%",justifyContent:"space-around"}}>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Name : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.name}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Player Class : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.playerClass}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Rarity : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.rarity}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Text : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.text}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Type : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.type}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Name : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.artist}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Attack : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.attack}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Card Set : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.cardSet}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Collectible : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.collectible}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Cost : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.cost}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"DbfID : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.dbfId}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Function : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.function}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Flavor : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.flavor}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Health : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.health}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                        <Text style={styles.cardDetail}>{"How To Get Gold : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.howToGetGold}</Text>
                        </View>
                        <View style={styles.cardDetailView}>
                            <Text style={styles.cardDetail}>{"Locale : "}</Text>
                            <Text style={styles.cardDetailText}>{this.state.cardDetail.locale}</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </CardFlip> 
        </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20,
  },
  cardDetailView:{
    width:100+"%",
    flexDirection:"row",
    alignItems:"center",
  },
  cardDetail:{
    fontSize:15,
    color:"white",
    fontWeight:"bold"
  },
  cardDetailText:{
      fontSize:13,
      color:"white",
      flexShrink: 1,
  },
  searchView:{
    width:85+"%",
    flexDirection:"row",
    alignItems:"center",
    marginVertical:15,
    paddingLeft:20,
    paddingVertical:5,
    borderWidth:1,
    borderColor:"black",
    borderRadius:10,
    alignSelf:"center"
  },
  input:{
    height:40,       
    color:'black',
    borderRadius:15,
    paddingHorizontal:10,
    flex:1,
    borderWidth:0,
},
});

export default CardDetail;
