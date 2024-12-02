import { useEffect, useState } from "react";
import "./App.css";

const initSpendingList = localStorage.getItem("spendingList");
function App() {
  //  지출항목
  const [spendingItem, setSpendingItem] = useState({
    name: "",
    price: 0,
  });

  const [spendingList, setSpendingList] = useState(
    initSpendingList ? JSON.parse(initSpendingList) : []
  );

  const [totalSpending, setTotalSpending] = useState(0);

  const [isEdit, setIsEdit] = useState(false);

  const [editSpendingItem, setEditSpendingItem] = useState({
    id: null,
    name: "",
    price: 0,
  });

  const addSpendingItem = (e) => {
    e.preventDefault();
    if (isEdit) {
      setSpendingList((prev) => {
        const updatedList = [...prev]; // 복사본 생성
        const editItemIndex = updatedList.findIndex(
          (element) => element.id === editSpendingItem.id
        );
        if (editItemIndex > -1) {
          updatedList[editItemIndex] = { ...editSpendingItem }; // 수정
        }
        return updatedList;
      });
      setIsEdit(false);
    } else {
      setSpendingList([
        ...spendingList,
        {
          id: Date.now(),
          ...spendingItem,
        },
      ]);
      // 초기화
      setSpendingItem({
        name: "",
        price: 0,
      });
    }
  };

  useEffect(() => {
    let totalSpending = 0;

    spendingList.forEach((element) => {
      totalSpending += Number(element.price);
    });
    setTotalSpending(totalSpending);

    localStorage.setItem("spendingList", JSON.stringify(spendingList));
  }, [spendingList]);

  return (
    <div className="App">
      <form onSubmit={addSpendingItem}>
        {isEdit && editSpendingItem.id !== null ? (
          <div>
            <h1>Budget Calculator</h1>

            <div>지출항목</div>
            <div>
              <input
                type="text"
                placeholder="예)렌트비"
                value={editSpendingItem?.name || ""}
                onChange={(e) => {
                  setEditSpendingItem((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </div>
            <div>비용</div>
            <div>
              <input
                type="number"
                min={0}
                value={editSpendingItem?.price || 0}
                onChange={(e) => {
                  setEditSpendingItem((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }));
                }}
              />
            </div>
            <input type="submit" value="저장" />
          </div>
        ) : (
          <div>
            <h1>Budget Calculator</h1>

            <div>지출항목</div>
            <div>
              <input
                type="text"
                placeholder="예)렌트비"
                value={spendingItem.name}
                onChange={(e) => {
                  setSpendingItem((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </div>
            <div>비용</div>
            <div>
              <input
                type="number"
                min={0}
                value={spendingItem.price}
                onChange={(e) => {
                  setSpendingItem((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }));
                }}
              />
            </div>
            <input type="submit" />
          </div>
        )}
      </form>
      {spendingList.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <button
            onClick={() => {
              setIsEdit(true);
              setEditSpendingItem(item);
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              setSpendingList((prev) => {
                return prev.filter((element) => element.id !== item.id);
              });
            }}
          >
            삭제
          </button>
        </div>
      ))}
      <div>총합</div>
      <div>{totalSpending}</div>

      <button
        onClick={() => {
          setSpendingList([]);
        }}
      >
        목록 지우기
      </button>
    </div>
  );
}

export default App;
