import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { useContext, useEffect } from "react";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      console.log(targetDiary);
      if (targetDiary) {
        //일기가 존재할때
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지 입니다</p>
    </div>
  );
};
export default Diary;
