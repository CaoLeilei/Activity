'use client'
import React from 'react'
import BaseLayout from '@/components/BaseLayout/BaseLayout'
import WorkbenchLayout from '@/components/WorkbenchLayout/WorkbenchLayout'

export default function Workbench() {
  return (
    <WorkbenchLayout currentMenu="Dashboard">
      <div>Workbench</div>
    </WorkbenchLayout>
  )
}
