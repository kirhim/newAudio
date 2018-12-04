import React, {Component} from 'react';
import { StyleSheet, Text,
  View, ScrollView,
  Animated, Image,
  ImageBackground, Dimensions,
  SafeAreaView, Button, TouchableOpacity, Platform} from 'react-native';
import { Container, Content, Header, Left, Right,Body} from 'native-base'
import Swiper from 'react-native-swiper'
import Category from './components/Category'
import { createAppContainer, createMaterialTopTabNavigator,createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Second from './screens/Second'
import Third from './screens/Third'
import Fourth from './screens/Fourth'

const Header_Maximum_Height = 100;

const Header_Minimum_Height = 0;


export default class App extends Component {

    constructor()
    {
        super();

        this.AnimatedHeaderValue = new Animated.Value(0);

    }


  render(){

    const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate(
          {
              inputRange: [ 0, ( Header_Maximum_Height - Header_Minimum_Height )  ],

              outputRange: [ '#009688', '#00BCD4' ],

              extrapolate: 'clamp'
          });

    const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate(
          {
              inputRange: [ 0, ( Header_Maximum_Height - Header_Minimum_Height ) ],

              outputRange: [ Header_Maximum_Height, Header_Minimum_Height ],

              extrapolate: 'clamp'
          });


  return(

<View style={{flex:1, marginTop:30}}>


    <AppContainer/>

</View>
  )
}
}

class HomeScreen extends Component{
  constructor()
  {
      super();

      this.AnimatedHeaderValue = new Animated.Value(0);

  }


  render() {
    const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate(
          {
              inputRange: [ 0, ( Header_Maximum_Height - Header_Minimum_Height )  ],

              outputRange: [ '#009688', '#00BCD4' ],

              extrapolate: 'clamp'
          });

    const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate(
          {
              inputRange: [ 0, ( Header_Maximum_Height - Header_Minimum_Height ) ],

              outputRange: [ Header_Maximum_Height, Header_Minimum_Height ],

              extrapolate: 'clamp'
          });


          return (
          <SafeAreaView style={{flex:1}}>

          <Animated.View style={{height:AnimateHeaderHeight,width:'100%', backgroundColor:'blue'}}>

          </Animated.View>
            <Animated.ScrollView
                              scrollEventThrottle = { 16 }
                              onScroll = { Animated.event(
                                [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue }}}]
                          )}>



                <ImageBackground
                style={{width:375, height:400}}
                source={require('./assets/pizza.jpg')}>
                </ImageBackground>



                  <View style={{flex:1,backgroundColor:'white', marginTop:15}}>
                  <Text style={{fontSize: 24, fontWeight:'700', paddingHorizontal: 20}}>#겨울별미</Text>
                  <ScrollView horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('./assets/chicken.jpg')}
                  name='삼계탕'
                  height={150}
                  width={100}/>

                  <Category imageUri={require('./assets/dumpling.jpg')}
                  name='물만두'
                  height={150}
                  width={100}/>

                  <Category imageUri={require('./assets/soup.jpg')}
                  name='호박죽'
                  height={150}
                  width={100}/>

                  <Category imageUri={require('./assets/riceNuddle.jpg')}
                  name='쌀국수'
                  height={150}
                  width={100}/>

                  <Category imageUri={require('./assets/chicken.jpg')}
                  name='삼계탕'
                  height={150}
                  width={100}/>
                  </ScrollView>
                  </View>


                  <View style={{flex:1,backgroundColor:'white', marginTop:15}}>
                  <Text style={{fontSize: 24, fontWeight:'700', paddingHorizontal: 20}}>블룸님을 위한 추천 레시피</Text>
                  <View style={{marginTop:0, paddingHorizontal:20, backgroundColor:'white'}}>
                  <ScrollView horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={{flexDirection:'row',}}>
                  <ImageBackground
                  style={{ justifyContent:'flex-end',flex:1, height:180, width:280, resizeMode:'cover', borderRadius:5, borderWidth:1,borderColor:'#dddddd', margin:10}} source={require('./assets/steak.jpg')}>
                  <Text style={{fontSize:18,paddingLeft:10,color:'white', fontWeight:'bold',paddingBottom:0}}>스테미너에는 스테이크</Text>
                  <Text style={{paddingLeft:10,fontSize:14,color:'white', fontWeight:'bold',paddingBottom:20}}>19개의 레시피 보기</Text>
                  </ImageBackground>
                  <ImageBackground
                  style={{ justifyContent:'flex-end',flex:1, height:180, width:330, resizeMode:'cover', borderRadius:5, borderWidth:1,borderColor:'#dddddd',margin:10}} source={require('./assets/pizza.jpg')}>
                  <Text style={{fontSize:18,paddingLeft:10,color:'white', fontWeight:'bold',paddingBottom:0}}>피자는 페페로니지!</Text>
                  <Text style={{paddingLeft:10,fontSize:14,color:'white', fontWeight:'bold',paddingBottom:20}}>19개의 레시피 보기</Text>
                  </ImageBackground>
                  </View>
                  </ScrollView>
                  </View>
                  </View>


                  <View style={{width:'100%', height:320, backgroundColor:'white',paddingTop:40, paddingLeft:20, paddingRight:20}}>
                  <ImageBackground
                  style={{ justifyContent:'center', alignItems:'center',flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5, borderWidth:1,borderColor:'#dddddd'}} source={require('./assets/dessert.jpg')}>
                  <Text style={{fontSize:18,paddingLeft:10,color:'white', fontWeight:'bold'}}>무한한 상큼함! 무화과 요거트</Text>
                  <Text style={{paddingLeft:10,fontSize:14,color:'white', fontWeight:'bold'}}>19개의 레시피 보기</Text>
                  </ImageBackground>
                  </View>


                  <View style={{flex:1,backgroundColor:'white', marginTop:15}}>
                  <Text style={{fontSize: 24, fontWeight:'700', paddingHorizontal: 20}}>달콤한 브런치의 유횩</Text>
                  <View style={{height: 130, marginTop: 10, backgroundColor:'white'}}>
                  <ScrollView horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('./assets/icecream.jpg')}
                  name='아이스크림'
                  height={150}
                  width={100}/>

                  <Category imageUri={require('./assets/cokkie.jpg')}
                  name='쿠키'
                  height={150}
                  width={100}/>

                  <Category imageUri={require('./assets/panCake.jpg')}
                  name='팬케익'
                  height={150}
                  width={100}/>

                  <Category imageUri={require('./assets/salad.jpg')}
                  name='샐러'
                  height={150}
                  width={100}/>
                  </ScrollView>
                  </View>
                  </View>

                  <View style={{flex:1,backgroundColor:'white',paddingTop:40, paddingLeft:20, paddingRight:20}}>
                  <Text style={{color:'black', fontSize: 24, fontWeight:'700',paddingBottom:10}}>BEST 오디오레시피</Text>
                  <ImageBackground
                  style={{ justifyContent:'flex-end', alignItems:'flex-start',flex:1, height:180, width:325, resizeMode:'cover', borderRadius:5, borderWidth:1,borderColor:'#dddddd'}} source={require('./assets/abo.jpeg')}>
                  <Text style={{fontSize:18,paddingLeft:10,color:'white', fontWeight:'bold'}}>까도 까도 매력적인 녀석</Text>
                  <Text style={{paddingLeft:10,fontSize:14,color:'white', fontWeight:'bold'}}>아보카도 토스트</Text>
                  </ImageBackground>
                  <ImageBackground
                  style={{ justifyContent:'flex-end', alignItems:'flex-start',flex:1, height:180, width:325, marginTop:15,resizeMode:'cover', borderRadius:5, borderWidth:1,borderColor:'#dddddd'}} source={require('./assets/brocoli.jpg')}>
                  <Text style={{fontSize:18,paddingLeft:10,color:'white', fontWeight:'bold'}}>헤이 브로~! 건강 챙겨야지</Text>
                  <Text style={{paddingLeft:10,fontSize:14,color:'white', fontWeight:'bold'}}>브로콜리 크림스프</Text>
                  </ImageBackground>
                  <ImageBackground
                  style={{ justifyContent:'flex-end', alignItems:'flex-start',flex:1, height:180, width:325,marginTop:15, resizeMode:'cover', borderRadius:5, borderWidth:1,borderColor:'#dddddd'}} source={require('./assets/tomatoPasta.jpg')}>
                  <Text style={{fontSize:18,paddingLeft:10,color:'white', fontWeight:'bold'}}>상큼한 맛에 내가 미트요</Text>
                  <Text style={{paddingLeft:10,fontSize:14,color:'white', fontWeight:'bold'}}>미트 토마토 파스ab</Text>
                  </ImageBackground>
                  </View>



                  </Animated.ScrollView>

                  </SafeAreaView>

                  );
                }
              }

class SettingsScreen extends Component {
  render(){
    return(
      <View>
        <Text>sssss</Text>
      </View>
      )
  }
}


const tabBarHeight = 100
const AppTabNavigator = createMaterialTopTabNavigator({

  Home:{
  screen:HomeScreen,
  navigationOptions: {
      header: null,
      tabBarVisible:true,
      activeTintColor: '#e91e63',
    }
  },
  Second:{
  screen: Second,
  navigationOptions: {
      header: null,
      tabBarVisible:true,
      }
    },
    Third:{
    screen: Third,
    navigationOptions: {
        header: null,
        tabBarVisible:true,
        }
      },
    Fourth:{
    screen: Fourth,
    navigationOptions: {
        header: null,
        tabBarVisible:true,
        }
      }
    }, {
    tabBarOptions: {
     showLabel: true,
      style: {
          backgroundColor: 'rgba(22, 22, 22, 0)',
          position: 'absolute',
          Top:  Dimensions.get('window').height-tabBarHeight,
          left:0,
          right:0
      },
      labelStyle:{
        fontSize:15,
        color:"red"
      }
    }
   }
  )


const AppContainer = createAppContainer(AppTabNavigator)

              const styles = StyleSheet.create({
                container: {
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F5FCFF',
                  },

                    HeaderStyle:
                    {   flex:1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: (Platform.OS == 'ios') ? 45 : 0,
                    },

                    HeaderInsideTextStyle:
                    {
                        color: "#fff",
                        fontSize: 18,
                        textAlign: 'center'
                    },

                    TextViewStyle:
                    {
                        textAlign: 'center',
                        color: "#000",
                        fontSize: 18,
                        margin: 5,
                        padding: 7,
                        backgroundColor: "#ECEFF1"
                    }

                    });
