import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Sun, Moon, Cloud, Rainbow } from "lucide-react";

const ButtonPanel = () => {
  const [activeMainButton, setActiveMainButton] = useState(null);
  const [expandedButtons, setExpandedButtons] = useState({});

  // 表格內容範例
  const tableContent = (
    <table className="w-full border-collapse">
      <tbody>
        {[1, 2, 3].map((row) => (
          <tr key={row}>
            {[1, 2, 3].map((col) => (
              <td key={col} className="border border-gray-300 p-4 text-center">
                {`${row}-${col}`}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const mainButtons = [
    { 
      icon: Heart, 
      color: 'bg-pink-500 hover:bg-pink-600', 
      label: '愛心',
      subButtons: [
        { color: 'bg-pink-300', label: '愛心1', content: <div className="text-2xl text-red-500 font-bold text-center">I Love You ❤️</div> },
        { color: 'bg-pink-400', label: '愛心2', content: tableContent },
        { color: 'bg-pink-500', label: '愛心3', 
          content: (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">標題範例</h3>
            <p>這是一個段落內容的範例</p>
            <ul className="list-disc pl-6">
              <li>列表項目 1</li>
              <li>列表項目 2</li>
              <li>列表項目 3</li>
            </ul>
          </div>
        ) },
        { color: 'bg-pink-600', label: '愛心4', content: (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-100 p-4 rounded">區塊 1</div>
            <div className="bg-red-100 p-4 rounded">區塊 2</div>
          </div>
        ) },
        { color: 'bg-pink-700', label: '愛心5', content: <img src="/api/placeholder/300/200" alt="placeholder" className="mx-auto" /> },
        { color: 'bg-pink-800', label: '愛心6', content: '這是愛心6的隱藏內容' }
      ]
    },
    { 
      icon: Star, 
      color: 'bg-yellow-500 hover:bg-yellow-600', 
      label: '星星',
      subButtons: [
        { color: 'bg-yellow-300', label: '星星1', content: '這是星星1的隱藏內容' },
        { color: 'bg-yellow-400', label: '星星2', content: '這是星星2的隱藏內容' },
        { color: 'bg-yellow-500', label: '星星3', content: '這是星星3的隱藏內容' },
        { color: 'bg-yellow-600', label: '星星4', content: '這是星星4的隱藏內容' },
        { color: 'bg-yellow-700', label: '星星5', content: '這是星星5的隱藏內容' },
        { color: 'bg-yellow-800', label: '星星6', content: '這是星星6的隱藏內容' }
      ]
    },
    { 
      icon: Sun, 
      color: 'bg-red-500 hover:bg-red-600', 
      label: '太陽',
      subButtons: [
        { color: 'bg-red-300', label: '太陽1', content: '這是太陽1的隱藏內容' },
        { color: 'bg-red-400', label: '太陽2', content: '這是太陽2的隱藏內容' },
        { color: 'bg-red-500', label: '太陽3', content: '這是太陽3的隱藏內容' },
        { color: 'bg-red-600', label: '太陽4', content: '這是太陽4的隱藏內容' },
        { color: 'bg-red-700', label: '太陽5', content: '這是太陽5的隱藏內容' },
        { color: 'bg-red-800', label: '太陽6', content: '這是太陽6的隱藏內容' }
      ]
    },
    { 
      icon: Moon, 
      color: 'bg-indigo-500 hover:bg-indigo-600', 
      label: '月亮',
      subButtons: [
        { color: 'bg-indigo-300', label: '月亮1', content: '這是月亮1的隱藏內容' },
        { color: 'bg-indigo-400', label: '月亮2', content: '這是月亮2的隱藏內容' },
        { color: 'bg-indigo-500', label: '月亮3', content: '這是月亮3的隱藏內容' },
        { color: 'bg-indigo-600', label: '月亮4', content: '這是月亮4的隱藏內容' },
        { color: 'bg-indigo-700', label: '月亮5', content: '這是月亮5的隱藏內容' },
        { color: 'bg-indigo-800', label: '月亮6', content: '這是月亮6的隱藏內容' }
      ]
    },
    { 
      icon: Cloud, 
      color: 'bg-gray-500 hover:bg-gray-600', 
      label: '雲朵',
      subButtons: [
        { color: 'bg-gray-300', label: '雲朵1', content: '這是雲朵1的隱藏內容' },
        { color: 'bg-gray-400', label: '雲朵2', content: '這是雲朵2的隱藏內容' },
        { color: 'bg-gray-500', label: '雲朵3', content: '這是雲朵3的隱藏內容' },
        { color: 'bg-gray-600', label: '雲朵4', content: '這是雲朵4的隱藏內容' },
        { color: 'bg-gray-700', label: '雲朵5', content: '這是雲朵5的隱藏內容' },
        { color: 'bg-gray-800', label: '雲朵6', content: '這是雲朵6的隱藏內容' }
      ]
    },
    { 
      icon: Rainbow, 
      color: 'bg-green-500 hover:bg-green-600', 
      label: '彩虹',
      subButtons: [
        { color: 'bg-green-300', label: '彩虹1', content: '這是彩虹1的隱藏內容' },
        { color: 'bg-green-400', label: '彩虹2', content: '這是彩虹2的隱藏內容' },
        { color: 'bg-green-500', label: '彩虹3', content: '這是彩虹3的隱藏內容' },
        { color: 'bg-green-600', label: '彩虹4', content: '這是彩虹4的隱藏內容' },
        { color: 'bg-green-700', label: '彩虹5', content: '這是彩虹5的隱藏內容' },
        { color: 'bg-green-800', label: '彩虹6', content: '這是彩虹6的隱藏內容' }
      ]
    }
  ];

/**
 * 處理主按鈕點擊事件的函數。
 * 根據當前活動的主按鈕索引來設置新的活動按鈕索引。
 * 如果當前活動的主按鈕索引與點擊的按鈕索引相同，則設置為 null，否則設置為點擊的按鈕索引。
 *
 * @param {number} index - 被點擊的主按鈕的索引。
 */
  const handleMainButtonClick = (index) => {
    setActiveMainButton(activeMainButton === index ? null : index);
  };

/**
 * 處理子按鈕點擊事件的函數。
 *
 * @param {number} mainIndex - 主按鈕的索引。
 * @param {number} subIndex - 子按鈕的索引。
 */
  const handleSubButtonClick = (mainIndex, subIndex) => {
    const buttonId = `${mainIndex}-${subIndex}`;
    setExpandedButtons(prev => ({
      ...prev,
      [buttonId]: !prev[buttonId]
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {mainButtons.map((button, index) => {
          const IconComponent = button.icon;
          return (
            <Button
              key={index}
              className={`${button.color} text-white p-4 h-16`}
              onClick={() => handleMainButtonClick(index)}
            >
              <IconComponent className="mr-2 h-5 w-5" />
              {button.label}
            </Button>
          );
        })}
      </div>
      
      {activeMainButton !== null && (
        <Card className="w-full">
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-4">
              {mainButtons[activeMainButton].subButtons.map((subButton, subIndex) => (
                <div key={subIndex} className="space-y-2">
                  <Button
                    className={`${subButton.color} text-white w-full`}
                    onClick={() => handleSubButtonClick(activeMainButton, subIndex)}
                  >
                    {subButton.label}
                  </Button>
                  {expandedButtons[`${activeMainButton}-${subIndex}`] && (
                    <Card className="w-full">
                      <CardContent className="p-4">
                        <p>{subButton.content}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ButtonPanel;