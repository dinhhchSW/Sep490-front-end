import React, { useState, useEffect } from 'react'
import manage from '../../service/manage'

export default function DemoComponet() {
  const [gadgets, setGadget] = useState([])

  useEffect(() => {
    // Gọi API để lấy danh sách các bài post
    manage.getGadget()
      .then(response => {
        console.log(response.data);
        setGadget(response.data) // Lưu trữ dữ liệu vào state
      })
      .catch(error => {
        console.error('Error fetching posts:', error)
      })
  }, [])

  return (
    <div>
      {
        gadgets.map((gadget, index) => (
          <div key={index} className={index % 2 === 0 ? '' : 'md:mt-20 md:mb-3'}>
            {gadget.brand}
          </div>
        ))
      }
    </div>
  )
}