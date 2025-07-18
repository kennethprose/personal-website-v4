import React, { useEffect } from 'react'
import projectData from '../content/projects.json'

function ProjectPage() {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('loaded')
				}
			})
		})

		const unloadedElements = document.querySelectorAll('.unloaded')
		unloadedElements.forEach((element) => observer.observe(element))

		return () => {
			unloadedElements.forEach((element) => observer.unobserve(element))
		}
	}, [])

	return (
		<div className='min-h-full px-3 mt-14 mx-auto max-w-5xl w-5/6'>
			<h1 className='px-2 text-5xl project_title'>
				Projects
			</h1>
			<div class='divider'></div>
			{projectData.projects.map((e) => {
				return (
					<div className='card md:card-side bg-white'>
						<figure className='pt-3 px-3 md:p-0 md:pl-3 md:py-3 md:min-w-100'>
							<img
								src={e.img}
								alt={e.alt}
							/>
						</figure>
						<div className='card-body'>
							<h2 className='card-title text-3xl'>
								{e.name}
							</h2>
							<p className='text-lg'>
								{e.description}
							</p>
							<div className='card-actions'>
								<a
									className='btn btn-neutral btn-outline hover:bg-transparent'
									href={e.link}
									target='_blank'
									rel='noreferrer'
								>
									{/* <Github className='text-xl' /> */}
									{/* &nbsp;&nbsp; */}
                                    Source
								</a>
							</div>
						</div>
					</div>
				)
			})}
			<br />
			<br />
		</div>
	)
}

export default ProjectPage