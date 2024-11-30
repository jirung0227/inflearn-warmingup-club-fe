import { useEffect, useState } from "react";
import "./App.css";
function App() {
  //  지출항목
  const [spendingItem, setSpendingItem] = useState("");

  const [spendingItemPrice, setSpendingItemPrice] = useState(0);

  const [spendingList, setSpendingList] = useState([]);

  const [totalSpending, setTotalSpending] = useState(0);

  const addSpendingItem = (e) => {
    e.preventDefault();
    setSpendingList([
      ...spendingList,
      {
        id: spendingList.length + 1,
        spendingItem: spendingItem,
        spendingItemPrice: spendingItemPrice,
      },
    ]);
    setSpendingItem("");
    setSpendingItemPrice(0);
  };

  useEffect(() => {
    let totalSpending = 0;

    spendingList.forEach((element) => {
      totalSpending += Number(element.spendingItemPrice);
    });
    setTotalSpending(totalSpending);
  }, [spendingList]);

  return (
    <div className='App'>
      <form onSubmit={addSpendingItem}>
        <h1>Budget Calculator</h1>
        <div>지출항목</div>
        <div>
          <input
            type='text'
            placeholder='예)렌트비'
            value={spendingItem}
            onChange={(e) => {
              setSpendingItem(e.target.value);
            }}
          />
        </div>
        <div>비용</div>
        <div>
          <input
            type='number'
            min={0}
            defaultValue={0}
            value={spendingItemPrice}
            onChange={(e) => {
              setSpendingItemPrice(e.target.value);
            }}
          />
        </div>
        <input type='submit' />
      </form>
      {spendingList.map((item) => (
        <div key={item.id}>
          <div>{item.spendingItem}</div>
          <div>{item.spendingItemPrice}</div>
          <button>수정</button>
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
