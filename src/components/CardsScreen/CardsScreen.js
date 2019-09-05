import React , {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Dimensions, ActivityIndicator, Animated } from 'react-native';
import { connect } from 'react-redux';
import AutoHeightImage from 'react-native-auto-height-image';
import LinearGradient from 'react-native-linear-gradient';
import CardFlip from 'react-native-card-flip';

let {height, width} = Dimensions.get('window');

class CardsScreen extends Component {

    constructor(props){
        super(props)
        this.state={cardHeight:10}
        this.Progress = []
        console.log(this.props.cards[this.props.navigation.state.params.cardName]);
    }

    static navigationOptions= ({navigation}) => ( {
        headerTitle:(
            <View style={{flexDirection:"row",alignItems:"center",marginLeft:5}}>        
                <Image source={require('../../img/titleLogo.png')} style={{width:40,height:40}}/>
                <Text style={{color:"white",fontSize:17,fontWeight:"bold",marginLeft:10}}>{navigation.state.params.cardName+" Cards"}</Text>
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
            {this.props.cards[this.props.navigation.state.params.cardName].length >0 ? 
            <FlatList
                ref={(list) => this.myFlatList = list} 
                style={{marginTop:10}}          
                data={this.props.cards[this.props.navigation.state.params.cardName]}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <AutoHeightImage width={width-40} source={require("../../img/cardsImg.jpg")} style={{marginTop:10,borderRadius:10}}/>
                }
                renderItem={({item, index})=>( 

                    <CardFlip style={{width:100+"%",height:this.state.cardHeight}} ref={(card) => this.Progress[item.cardId] = card} >
                        <TouchableOpacity style={{width:100+"%"}} onPress={() => this.Progress[item.cardId].flip()} >
                            <AutoHeightImage width={width-40} source={{uri:item.img}} onLayout={(event) => { index <=2 ? this.setState({cardHeight:event.nativeEvent.layout.height}) :null}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:100+"%",height:this.state.cardHeight-50,alignContent:"center",marginTop:40}} onPress={() =>  this.Progress[item.cardId].flip()} >
                            <LinearGradient 
                            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                            locations={[0,0.9]}
                            colors={['#d26338','#ee9b41']} 
                            style={{flexDirection:"column",padding:10,borderRadius:10,width:100+"%",height:100+"%",justifyContent:"space-around"}}>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Name : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.name}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Player Class : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.playerClass}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Rarity : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.rarity}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Text : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.text}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Type : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.type}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Name : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.artist}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Attack : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.attack}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Card Set : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.cardSet}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Collectible : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.collectible}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Cost : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.cost}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"DbfID : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.dbfId}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Function : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.function}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Flavor : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.flavor}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Health : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.health}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                <Text style={styles.cardDetail}>{"How To Get Gold : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.howToGetGold}</Text>
                                </View>
                                <View style={styles.cardDetailView}>
                                    <Text style={styles.cardDetail}>{"Locale : "}</Text>
                                    <Text style={styles.cardDetailText}>{item.locale}</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </CardFlip>                    
                )}
                removeClippedSubviews={true}  
                extraData={this.props.cards}   
                />
                :
                <ActivityIndicator size="large" color="#8ba8a6" style={{marginTop:50}} />
                }   
        </View>
    );
    }  
}

const mapStateToProps = (state) => {
    const { cards } = state
    return { cards }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20,
  },
  MechanicText:{
      fontSize:14,
      color:"white",
      fontWeight:"bold"
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
  }
});

export default connect(mapStateToProps)(CardsScreen);
