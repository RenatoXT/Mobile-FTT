import React, { useState } from "react";


export function ActivePage() {
  const [ activePage, setActivePage ] = useState<string>("string");

  const changePage = (newVal: string)  => {
    setActivePage(newVal)
  };

    return {
        activePage,
        changePage
    }

}
