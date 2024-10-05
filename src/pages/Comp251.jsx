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
            syllabus: <a href="comp251/files/syllabus.pdf">./files/syllabus.pdf</a>
          </li>
          <li>
            location: stewart biology, S1/4
          </li>
          <li>
            time: tuesday & thursday, 11:35 to 12:55
          </li>
        </ul>

        <h2>Timeline/Deadlines</h2>
        <ul className="comp251-notes">
          <li>
            midterm 1: october 8
          </li>
          <li>
            assignment 1 due: october 10
          </li>
          <li>
            assignment 2 due: november 5
          </li>
          <li>
            midterm 2: november 19
          </li>
          <li>
            assignment 3 due: november 28
          </li>
          <li>
            midterm 3 (optional): december 3
          </li>
        </ul>
      </div>
    </div>
  )
}
