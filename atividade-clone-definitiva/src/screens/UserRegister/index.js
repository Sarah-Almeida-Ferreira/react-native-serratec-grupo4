import login from '../../../assets/login.png';
import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import { Logo } from '../../components/Logo/styles';
import { Container, SpacingHeight, Title } from "./styles";
import { Input } from '../../components/Input';
import spacing from '../../themes/spacing';
import { Header } from '../../components/Header';

export const UserRegister = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Input placeholder={'Nome'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'CPF'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Data de Nascimento'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Senha'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Confirmar Senha'} />
      <SpacingHeight height={spacing.extraLarge} />


      <ButtonPrimary
      onPress={(() => navigation.goBack())}
      >
        <TextButton>
          Cadastrar
        </TextButton>
      </ButtonPrimary>
    </Container>
  )
}