import React from 'react'
import PreviewModal from 'components/modals/preview-modal'

export default function Preview({
  isOpen,
  onClose,
  name,
  model,
  manufacturer,
  cost_in_credits,
  max_atmosphering_speed,
  crew,
  passengers,
  cargo_capacity,
  consumables,
  hyperdrive_rating,
  MGLT,
  starship_class,
}) {
  return (
    <PreviewModal onClose={onClose} title="Details" isOpen={isOpen} size="lg">
      <table className="table table-bordered table-hovered">
        <tbody>
          <tr>
            <td className="table-info">Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td className="table-info">Model</td>
            <td>{model}</td>
          </tr>
          <tr>
            <td className="table-info">Manufacturer</td>
            <td>{manufacturer}</td>
          </tr>
          <tr>
            <td className="table-info">Cost In Credits</td>
            <td>{parseFloat(cost_in_credits || 0).toFixed(2)}</td>
          </tr>
          <tr>
            <td className="table-info">Max Atmosphering Speed</td>
            <td>{max_atmosphering_speed}</td>
          </tr>
          <tr>
            <td className="table-info">Crew</td>
            <td>{crew}</td>
          </tr>
          <tr>
            <td className="table-info">Passengers</td>
            <td>{passengers}</td>
          </tr>

          <tr>
            <td className="table-info">Consumables</td>
            <td>{consumables}</td>
          </tr>
          <tr>
            <td className="table-info">Cargo Capacity</td>
            <td>{cargo_capacity}</td>
          </tr>
          <tr>
            <td className="table-info">Hyperdrive Rating</td>
            <td>{hyperdrive_rating}</td>
          </tr>
          <tr>
            <td className="table-info">MGLT</td>
            <td>{MGLT}</td>
          </tr>
          <tr>
            <td className="table-info">Starship Class</td>
            <td>{starship_class}</td>
          </tr>
        </tbody>
      </table>
    </PreviewModal>
  )
}
