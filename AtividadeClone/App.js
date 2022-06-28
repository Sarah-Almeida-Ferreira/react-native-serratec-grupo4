
import  Favorito  from './src/screens/Favorito';

export default function App() {
  return (
    <>
    <Favorito />
    <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={true} />
    </>
    
  );
}

