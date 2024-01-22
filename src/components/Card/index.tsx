import styled from "styled-components";

const CardEstilizado = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  max-width: 100%;
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
  .ladoDireito {
    max-width: 100%;
    img {
      width: 65%;
    }
  }
`;

const Card = () => {
  return (
    <section>
      <CardEstilizado>
        <div className="ladoEsquerdo">Lado Esquerdo</div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className="ladoDireito">
          <img src="https://images.unsplash.com/photo-1629984557780-4dde2292e245?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w1NTMyNDV8MHwxfHNlYXJjaHwxfHxTJUMzJUEzbyUyMFBhdWxvfGVufDB8fHx8MTcwNTM4NzUzNXww\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400" />
        </div>
      </CardEstilizado>
    </section>
  );
};

export default Card;

// https://api.unsplash.com/search/photos/?client_id=EdHwWZ9Led9w-i3PXhfOd1cA1aXLxjTuRUOAgVFzAgQ&query=Sao Paulo
