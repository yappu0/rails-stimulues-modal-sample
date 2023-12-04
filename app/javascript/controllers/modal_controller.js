import { Controller } from "@hotwired/stimulus"
import MicroModal from 'micromodal'

export default class extends Controller {
  initialize() {
    MicroModal.init()
  }
}
