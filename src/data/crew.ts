export interface CrewMember {
  id: number
  name: string
  role: string
  image?: string
}

export const crewData: CrewMember[] = [
  { id: 1, name: '팀원 1', role: '직책/역할', image: '/crew/member1.jpg' },
  { id: 2, name: '팀원 2', role: '직책/역할', image: '/crew/member2.jpg' },
  { id: 3, name: '팀원 3', role: '직책/역할', image: '/crew/member3.jpg' },
  { id: 4, name: '팀원 4', role: '직책/역할', image: '/crew/member4.jpg' },
  { id: 5, name: '팀원 5', role: '직책/역할', image: '/crew/member5.jpg' },
  { id: 6, name: '팀원 6', role: '직책/역할', image: '/crew/member6.jpg' },
]
