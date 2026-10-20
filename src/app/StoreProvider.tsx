'use client'

import { AppStore, makeStore } from '@/lib/store';
import React, { useState } from 'react'
import { Provider } from 'react-redux';

type Props = {
    children: React.ReactNode;
}

export default function StoreProvider({ children }: Props) {
    const [store] = useState<AppStore>(makeStore);
  return (
    <Provider store={store}>{children}</Provider>
  )
}