"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [value, setValue] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  useEffect(() => {
    fetch("/api/exchangeRate")
      .then((res) => res.json())
      .then((data) => setRate(data[0].value))
      .catch((err) => console.error(err));
  }, []);

  const handleCalculator = () => {
    if (!value || value <= 0) {
      setIsEmpty(true);
      return;
    }
    if (value > 0 && rate) {
      setResult(value * rate);
    }
  };
  return (
    <div
      id="calculate"
      className="w-full h-[200px] bg-white px-20 py-30 flex justify-center items-center flex-col"
    >
      <div>
        <p className="text-3xl font-bold">Đổi tiền nhanh từ Nhân dân tệ</p>
      </div>
      <div className="mt-4">
        <div className="flex justify-center items-center gap-[20px]">
          <label htmlFor="input-change" className="whitespace-nowrap">
            Nhập số nhân dân tệ:
          </label>
          <Input
            className="max-w-[200px]"
            id="input-change"
            type="number"
            placeholder="Số nhân dân tệ"
            value={value}
            onChange={(e) => {
              setValue(Number(e.target.value));
              setIsEmpty(false);
            }}
          />
          <Button onClick={handleCalculator} variant="secondary">
            Đổi
          </Button>
        </div>

        {isEmpty && (
          <p className="text-red-500 text-sm mt-2">Vui lòng nhập số tiền</p>
        )}

        <div className="flex justify-start items-center gap-[20px]">
          <label htmlFor="result-change" className="whitespace-nowrap">
            Tổng tiền sau khi đổi:
          </label>
          <Input
            className="max-w-[100px]"
            id="result-change"
            disabled
            value={result}
          />
          <label> VND</label>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
