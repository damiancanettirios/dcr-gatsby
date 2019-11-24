import { useStaticQuery, graphql } from "gatsby"

const useResume = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: allContentfulCv(sort: { fields: sequence, order: ASC }) {
        nodes {
          id
          name
          myTitle
          startDate(formatString: "MMMM YYYY")
          endDate(formatString: "MMMM YYYY")
          placeLogo {
            file {
              url
            }
          }
          duties {
            duties
          }
          placeLogo {
            file {
              url
            }
          }
        }
      }
    }
  `)

  return data.resume.nodes
}

export default useResume
