import React , {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import AutoHeightImage from 'react-native-auto-height-image';
import Card from "../components/Card";

let {width} = Dimensions.get('window');

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
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>( 
                    <Card card={item} /> 
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
