import { SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {
  return (
  <SummaryContainer>
    <div>
      <header>
        <span>Entradas</span>
        <ArrowCircleUp size={32} color="#f5a68" />
      </header>

      <strong>R$ 17.500,00</strong>
    </div>

    <div>
      <header>
        <span>Saídas</span>
        <ArrowCircleDown size={32} color="#f75a68" />
      </header>

      <strong>R$ 17.500,00</strong>
    </div>
    <div>
      <header>
        <span>Total</span>
        <CurrencyDollar size={32} color="#fff" />
      </header>

      <strong>R$ 17.500,00</strong>
    </div>
  </SummaryContainer>
  );
}
