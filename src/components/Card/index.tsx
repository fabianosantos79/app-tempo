import styled from "styled-components";

const CardEstilizado = styled.div`
  display: flex;
  width: 900px;
  height: 350px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  padding: 10px 20px;
  justify-content: space-around;
`;

const Card = () => {
  return (
    <section>
      <CardEstilizado>
        <div>Lado Esquerdo</div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div>Lado Direito</div>
      </CardEstilizado>
    </section>
  );
};

export default Card;
