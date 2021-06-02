/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export default function getActiveElement(doc: ?Document): ?Element {
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    // shadow dom の場合は shadowRoot の activeElement を見る必要がある
    if (doc.activeElement && doc.activeElement.shadowRoot) {
      return getActiveElement(doc.activeElement.shadowRoot);
    }
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
