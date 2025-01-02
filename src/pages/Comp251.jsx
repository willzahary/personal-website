import React, { useState } from 'react'
import { EMAIL_251 } from '../links'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'

export const Comp251 = () => {

  const [copied, setCopied] = useState(false)

  return (
    <div className="comp251">
      <div className="comp251-text">
        <h1>Comp 251<span className="comp251-title">: Algorithms and Data Structures</span></h1>

        <h2>Contact</h2>
        <ul className="comp251-contact">
          <li>
            email: {EMAIL_251} <CopyToClipboard
                      className='link'
                      text={EMAIL_251}
                      onCopy={() => setCopied(true)}
                  >
                  <span>
                      { copied ? "[copied]" : "[copy]" }
                  </span>
                  </CopyToClipboard>
          </li>
          <li>
            will's office hours: friday 9-12 in mcconnell 312
          </li>
          <li>
            giulia and TA office hours: check the calendar on myCourses
          </li>
        </ul>

        <h2>General Info</h2>
        <ul className="comp251-info">
          <li>
            syllabus: <a target="_blank" rel="noopener noreferrer" href="comp251/files/syllabus.pdf">./files/syllabus.pdf</a>
          </li>
          <li>
            location: stewart biology, S1/4
          </li>
          <li>
            time: tuesday & thursday, 11:35 to 12:55
          </li>
        </ul>

        <h2>Notes</h2>
        <ul className="comp251-notes">
          <li>
            divide and conquer algorithms: <a target="_blank" rel="noopener noreferrer" href="comp251/files/divide-and-conquer.pdf">./files/divide-and-conquer.pdf</a>
          </li>
          <li>
            dynamic programming: <a target="_blank" rel="noopener noreferrer" href="comp251/files/dynamic-programming.pdf">./files/dynamic-programming.pdf</a>
          </li>
        </ul>

        <h2>Slides</h2>
        <ul className="comp251-notes">
          <li>
            I'll post the slides for the lectures I gave soon... email me (williamzahary@gmail.com) if you want the TeX files.
          </li>
        </ul>
      </div>
    </div>
  )
}
