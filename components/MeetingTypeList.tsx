'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] =
  useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  return (
     <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard 
        img='/icons/add-meeting.svg'
        title='New Meeting'
        description='Start an Instant Meeting'
        className='bg-cyan-500'
        handleClick={() => setMeetingState('isJoiningMeeting')}
        
      />

      <HomeCard 
        img='/icons/schedule.svg'
        title='Schedule Meeting'
        description='Plan Your Meeting'
        className='bg-amber-500'
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />

      <HomeCard 
        img='/icons/recordings.svg'
        title='View Recordings'
        description='Check Out Your Recordings'
        className='bg-green-500'
        handleClick={() => router.push('/recordings')}
      />

      <HomeCard 
        img='/icons/join-meeting.svg'
        title='Join Meeting'
        description='Via Invitation Link'
        className='bg-fuchsia-500'
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      
    </section>
  )
}

export default MeetingTypeList