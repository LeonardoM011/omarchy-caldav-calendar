.pragma library

// Under a replacement bar (bar.id other than omarchy.bar) the host gives bar
// widgets a service-less shell facade, so serviceFor() returns null and the
// panel cannot reach its own service. Service.qml publishes itself here and
// Panel.qml falls back to it. Plugin reloads unload services before calling
// Qt.clearComponentCache(), so a reloaded service and panel share one instance.

var service = null

function publish(instance) {
  service = instance
}

function retract(instance) {
  if (service === instance) service = null
}

function current() {
  return service
}
