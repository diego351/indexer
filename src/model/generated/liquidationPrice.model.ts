import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {OrderSide} from "./_orderSide"
import {Market} from "./market.model"

@Entity_()
export class LiquidationPrice {
    constructor(props?: Partial<LiquidationPrice>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    user!: string

    @Column_("varchar", {length: 5, nullable: false})
    side!: OrderSide

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    cumulativeValue!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    cumulativeQuantity!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    liquidationPrice!: bigint

    @Index_()
    @ManyToOne_(() => Market, {nullable: true})
    market!: Market
}
