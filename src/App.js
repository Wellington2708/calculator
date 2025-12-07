import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content } from "../src/styles.js";

const App = () => {
  return (
    <Container>
      <Content>
        <Input />
        <Button />
      </Content>
    </Container>
  );
}

export default App;
