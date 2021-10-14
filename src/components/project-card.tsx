/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from "theme-ui"
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
  gallery: {
    thumb: {
      small: string
      large: string
    }
    images: string[]
  }
}

const ProjectCard = ({ link, title, children, bg, gallery: { thumb, images } }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <div
      sx={{
        width: '100%',
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: [2, 4],
        py: [3, 5],
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
        },
      }}
    >
      <div
        sx={{
          display: 'flex',
          aspectRatio: '4/3'
        }}
      >
        {thumb && (
          <img 
            sx={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
              paddingBottom: '30px',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'cover'
            }}
            src={thumb.small}
            srcSet={`${thumb.small} 600w, ${thumb.large} 2560w`}
            onClick={() => setIsOpen(true)}
          />
        )}
        
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        )}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        sx={{color: `white`}}
      >
        <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
        <div
          sx={{
            textTransform: `uppercase`,
            letterSpacing: `wide`,
            pt: 4,
            fontSize: [4, 5],
            fontWeight: `medium`,
            lineHeight: 1,
          }}
        >
          {title}
        </div>
      </a>
    </div>
  )
}

export default ProjectCard