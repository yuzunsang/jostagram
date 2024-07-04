import { useNavigate } from "react-router-dom";
import { Button } from "../components";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>404 Not Found</h1>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
      </div>
      <Button type="button" onClick={() => navigate(-1)}>
        이전 페이지로..
      </Button>
    </>
  );
}
