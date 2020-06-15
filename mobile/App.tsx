import React from 'react';
import { StatusBar, View } from 'react-native'
import { AppLoading } from 'expo'
// Para usar estas fontes vc precisa importar de qualquer uma das fontes importadas uma função useFonts
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

import Routes from './src/routes'

// View reoresenta uma div, section, footer
// Text representa o texto
// Por padrão todos os conteúdos tem display flex
// Vc precisa colocar uma view (div) para colocar 2 ou mais componentes
// A view conrresponde a uma div e ela pode causar um efeito como uma div se vc quiser colocar uma tag que não cause nenhum elemento 
// vc pode colocar a tag <> para encapsular 

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Ubuntu_700Bold
  })

  // Enquanto as nossas fontes não forem carregadas
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}



