import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import Points from './pages/Points'
import Detail from './pages/Detail'

// Esta variável precisa ser carregada para gerar a rota
// O AppStack ele vai funcionar como o roteador da nagegação
const AppStack = createStackNavigator()


// Navigation container funciona mais ou menos como o browser router que define para as nossas rotas como elas devem se comportar
// headerMode serve para remover o header completamente
// screenOptions vc usa quando vc quer usar um background padrão para toda a sua aplicação
const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{ cardStyle: {backgroundColor: '#f0f0f5'} }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Points" component={Points} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes