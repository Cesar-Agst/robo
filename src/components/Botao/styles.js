import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  botao: {
    backgroundColor: theme.cores.blue,
    height: 50,
    width: 200,
    borderRadius: 50,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textoBotao: {
    color: theme.cores.white,
    fontSize: 16
  },
});