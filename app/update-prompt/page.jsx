import { Suspense } from 'react'
import EditPrompt from '@components/EditPrompt'

export default function UpdatePromptPage() {
  return (
    <Suspense fallback={<p>Loading editor…</p>}>
      <EditPrompt />
    </Suspense>
  )
}
