import React from 'react'

function Personal({personal, setResume}) {
  return (
    <div>
      <section className='flex flex-col gap-2 mt-[50px]'>
      <p><span className='flex justify-start pl-[20px] text-lg font-bold'>Personal Information</span></p>
            <div className='flex flex-row'>
              <h4 className='pl-[20px] mt-[25px]'>Enter your Name:</h4>
              <input className="w-[200px] ml-[20px] mt-[20px] border-b-1"
                type='text'
                value={personal.first_name}
                onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, first_name: e.target.value } }))}
              />

            </div>

            <div className='flex flex-row'>
              <h4 className='pl-[20px] mt-[25px]'>Position:</h4>
              <input className="w-[200px] ml-[20px] mt-[20px] border-b-1"
                type='text'
                placeholder='current position'
                value={personal.position}
                onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, position: e.target.value } }))}
              />

            </div>

            <div className='flex flex-row'>
              <h4 className='pl-[20px] mt-[25px]'>Phone:</h4>
              <input className="w-[200px] ml-[20px] mt-[20px] border-b-1"
                type='text'
                value={personal.phone}
                onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, phone: e.target.value } }))}
              />

            </div>

            <div className='flex flex-row'>
              <h4 className='pl-[20px] mt-[25px]'>Email:</h4>
              <input className="w-[200px] ml-[20px] mt-[20px] border-b-1"
                type='text'
                value={personal.email}
                onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, email: e.target.value } }))}
              />

            </div>

            <div className='flex flex-row'>
              <h4 className='pl-[20px] mt-[25px]'>Address:</h4>
              <input className="w-[200px] ml-[20px] mt-[20px] border-b-1"
                type='text'
                value={personal.address}
                onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, address: e.target.value } }))}
              />

            </div>

            <div className='flex flex-row'>
              <h4 className='pl-[20px] mt-[25px]'> Tell us About yourself </h4>
              <input className='w-[200px] ml-[20px] mt-[20px] border-1 text-[13px] pl-[7px]'
                value={personal.about}
                placeholder="min 50 words"
                onChange={(e) => setResume(prev => ({ ...prev, personal: { ...prev.personal, about: e.target.value } }))}
              />
            </div>
        </section>
    </div>
  )
}

export default Personal
