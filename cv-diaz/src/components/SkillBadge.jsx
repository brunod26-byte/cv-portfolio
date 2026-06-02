import PropTypes from "prop-types"

function SkillBadge({ skill }) {
  return (
    <span className="badge bg-success m-1">
      {skill}
    </span>
  )
}

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired,
}

export default SkillBadge