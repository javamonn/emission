/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _ShowHeader_show$ref: unique symbol;
export type ShowHeader_show$ref = typeof _ShowHeader_show$ref;
export type ShowHeader_show = {
    readonly name: string | null;
    readonly description: string | null;
    readonly press_release: string | null;
    readonly exhibition_period: string | null;
    readonly status: string | null;
    readonly partner: ({
        readonly name?: string | null;
    }) | null;
    readonly images: ReadonlyArray<({
        readonly url: string | null;
        readonly aspect_ratio: number;
    }) | null> | null;
    readonly " $refType": ShowHeader_show$ref;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v2 = [
  v0
];
return {
  "kind": "Fragment",
  "name": "ShowHeader_show",
  "type": "Show",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "press_release",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "exhibition_period",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "partner",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        v1,
        {
          "kind": "InlineFragment",
          "type": "ExternalPartner",
          "selections": v2
        },
        {
          "kind": "InlineFragment",
          "type": "Partner",
          "selections": v2
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "images",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "aspect_ratio",
          "args": null,
          "storageKey": null
        }
      ]
    },
    v1
  ]
};
})();
(node as any).hash = 'ec69c4f5125894344a59f5697abd9e6c';
export default node;
